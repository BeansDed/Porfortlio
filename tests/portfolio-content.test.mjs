import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

function loadTypeScriptModule(path) {
  const source = read(path);
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const module = { exports: {} };
  Function("module", "exports", outputText)(module, module.exports);
  return module.exports;
}

test("project case studies are complete and recruiter-readable", () => {
  const { projects } = loadTypeScriptModule("src/data/projects.ts");

  assert.equal(projects.length, 6);
  assert.equal(new Set(projects.map(({ id }) => id)).size, projects.length);

  for (const project of projects) {
    assert.match(project.id, /^[a-z0-9-]+$/);
    assert.ok(project.title.length <= 42, `${project.id} title is too long`);
    assert.ok(project.category, `${project.id} needs a category`);
    assert.ok(project.description.length >= 70, `${project.id} needs a useful summary`);
    assert.ok(project.details.length >= 3, `${project.id} needs contribution evidence`);
    assert.ok(project.tags.length >= 3, `${project.id} needs a credible stack`);
  }
});

test("home page presents evidence before background details", () => {
  const page = read("src/app/page.tsx");
  const work = page.indexOf("<BentoGrid");
  const experience = page.indexOf("<Experience");
  const skills = page.indexOf("<About");

  assert.ok(work > -1, "projects section is missing");
  assert.ok(work < experience, "projects should appear before experience");
  assert.ok(experience < skills, "experience should appear before skills");
});

test("navigation and contact paths are direct and accessible", () => {
  const navbar = read("src/components/Navbar.tsx");
  const footer = read("src/components/Footer.tsx");

  assert.match(navbar, /aria-label="Primary navigation"/);
  assert.match(navbar, /aria-label="Mobile navigation"/);
  assert.match(footer, /mailto:malonzoardre3@gmail\.com/);
  assert.match(footer, /https:\/\/github\.com\/BeansDed/);
  assert.doesNotMatch(footer, /href="https:\/\/linkedin\.com"/);
});

test("project detail routes provide metadata and static params", () => {
  const projectPage = read("src/app/projects/[id]/page.tsx");

  assert.match(projectPage, /generateMetadata/);
  assert.match(projectPage, /generateStaticParams/);
  assert.match(projectPage, /dynamicParams\s*=\s*false/);
});

test("dead runtime and deployment files are removed", () => {
  const gitignore = read(".gitignore");
  const pkg = JSON.parse(read("package.json"));

  assert.match(gitignore, /\*\.log/);
  assert.equal(pkg.dependencies["framer-motion"], undefined);
  assert.equal(pkg.dependencies.clsx, undefined);
  assert.equal(pkg.dependencies["tailwind-merge"], undefined);
});

import {
  Tree,
  formatFiles,
  installPackagesTask,
  updateJson,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
// import { updateJson } from '@nrwl/devkit';
import { readJson } from '@nrwl/devkit';
export default async function (tree: Tree, schema: any) {
  // await libraryGenerator(tree, { name: schema.name });
  // await formatFiles(tree);
  function getScopes(nxJson: any) {
    const projects: any[] = Object.values(nxJson.projects);
    const allScopes: string[] = projects
      .map((project) =>
        project.tags
          // take only those that point to scope
          .filter((tag: string) => tag.startsWith('scope:'))
      )
      // flatten the array
      .reduce((acc, tags) => [...acc, ...tags], [])
      // remove prefix `scope:`
      .map((scope: string) => scope.slice(6));
    // remove duplicates
    return Array.from(new Set(allScopes));
  }
  const scopeList: string[] = await getScopes(readJson(tree, 'nx.json'));

  await updateJson(tree, 'tools/generators/util-lib/schema.json', (obj) => {
    return {
      ...obj,
      properties: {
        ...obj.properties,
        directory: {
          ...obj.properties.directory,
          items: scopeList.map((scope) => ({ value: scope, label: scope })),
        },
      },
    };
  });
  // await updateJson(tree, 'workspace.json', (obj) => {
  //   return { ...obj, defaultProject: 'api' };
  // });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

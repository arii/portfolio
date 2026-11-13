// fallow-ignore-file unused-file
// Loaded by name at scripts/impact-analysis.ts:61 and passed to depcruise at runtime
/** @type {import('dependency-cruiser').IConfiguration} */
export default {
  forbidden: [
  ],
  options: {
    doNotFollow: {
      path: 'node_modules'
    },
    tsPreCompilationDeps: true,
    tsConfig: {
      fileName: 'tsconfig.json'
    },
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default"],
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css"]
    }
  }
};

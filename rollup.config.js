export default {
    entry: 'dist/src/index.js',
    dest: 'dist/src/bundles/ngxwizard.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ngxwizard',
    globals: {
        '@angular/core': 'ng.core'
    }
}

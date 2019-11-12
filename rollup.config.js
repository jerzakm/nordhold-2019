import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'
import html from 'rollup-plugin-bundle-html'
import autoPreprocess from 'svelte-preprocess'

import {
    terser
} from "rollup-plugin-terser"
import typescript from "rollup-plugin-typescript2"

const production = false

import {
    preprocess,
    createEnv,
    readConfigFile
} from "@pyoner/svelte-ts-preprocess";

export default {
    input: 'src/main.ts',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'dist/bundle.js'
    },
    watch: {
        exclude: ['node_modules/**']
    },
    plugins: [
        scss(),
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // we'll extract any component CSS out into
            // a separate file  better for performance
            // css: css => {
            //     css.write('dist/bundle.css')
            // },
            preprocess: autoPreprocess()
        }),
        html({
            template: 'src/index.html',
            dest: "dist",
            filename: 'index.html',
            inject: 'body'
        }),
        postcss({
            extract: true,
            minimize: false,
            use: [
                ['sass', {
                    includePaths: [
                        './src/styles/theme',
                        './node_modules'
                    ]
                }]
            ]
        }),
        resolve(),
        commonjs(),
        typescript(),
        serve({
            // Launch in browser (default: false)
            open: true,

            // Folder to serve files from
            contentBase: '',

            // Multiple folders to serve from
            contentBase: ['dist'],

            // Options used in setting up server
            host: 'localhost',
            port: 3000,
        }),

        livereload()
    ]
}
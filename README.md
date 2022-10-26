# udemyTypeScriptForProfessionals2022-
Udemy TypeScript for Professionals - 2022 Edition<br />
<br />
## Setup
<ol>
<li> Download https://nodejs.org/en/ </li>
<li> Verify in cmd after install as <em>node --version</em> </li>
<li> Also verify:
<ol>
<li><em>npm --version</em> </li>
<li><em>npx --version</em> </li>
</ol>
</li>
</ol>
<br />
<h2>Create new project</h2>
<ol>
<li><em>npm init -y</em></li>
<em>-y</em> is used to select default options <br />
<li>npm i typescript</em></li> 
To additionally install typescript compiler <br />
<li><em>npx tsc --init</em></li> 
To initialize typescript configuration options json file <strong>tsconfig</strong><br />
<li><em>npx tsc --init --rootdir src --outdir lib</em></li> 
To initialize typescript configuration options json file <strong>tsconfig</strong>. <br />
All source code will be located in <strong>src</strong> folder. Output js code will be generated in <strong>lib</strong> folder <br />
<li>In <strong>VS Studio Code</strong> can now open project that was created</li>
</ol>
<br />
<h2>Run first script</h2>
<ol>
<li>Create <strong>src</strong> folder</li>
<li>Add new file, i.e. <strong>index.ts</strong></li>
<li>Run in terminal <em>npx tsc --watch</em></li>
If we will change the code in <strong>index.ts</strong> <em>--watch</em> will re-compile on the fly. <br />
.JS files are created in <strong>lib</strong> folder that we specified previously. <br />
This is because files need to be transformed into .js in order to be understood by node. <br />
<li>Run in new terminal <em>node lib/index.js</em></li>
</ol>
# Simple steps to use this tree view in any applications

1. Add IlTree code folder in any react app.
2. Import 'IlTree' component where it needs to be shown. Also pass 'data' and 'click listener' as props.

Example:

<!-- const sampleData = [{"name":"Investor A","files":[{"name":"Capital Calls","files":[{"name":"Level3a","files":[]},{"name":"Level3b","files":[]},{"name":"Level3c","files":[]}]},{"name":"Distribution Notices","files":[{"name":"Level3a","files":[]}]},{"name":"K1s","files":[]}]},{"name":"Investor B","files":[{"name":"Capital Calls","files":[]},{"name":"Distribution Notices","files":[]},{"name":"K1s","files":[]}]},{"name":"Investor C","files":[{"name":"Capital Calls","files":[]},{"name":"Distribution Notices","files":[]},{"name":"K1s","files":[]}]}]; -->

<!-- handleClick = (node) => {
    console.log("Clicked Node : ", node);
}; -->

`<IlTree data={data} onNodeClick={this.handleClick}/>`

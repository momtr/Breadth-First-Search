// JSON data from 'data.json' file
let data;
// the graph object storing all nodes and connections
let graph;

// DOM elements
let nodeA;
let nodeB;
let output;

function preload() {
    data = loadJSON('data.json');
}


function setup() {
    graph = new Graph();
    for(let i of data.graph) {
        graph.addNode(new Node(i.label));
    }
    for(let i of data.graph) {
        for(let j of i.edges) {
            graph.connect(i.label, j);
        }
    }

    createSpan("start node");
    nodeA = createSelect();
    createSpan("goal node");
    nodeB = createSelect();
    for(let i of graph.nodesLabels) {
        nodeA.option(i);
        nodeB.option(i);
    }
    nodeA.changed(bfs);
    nodeB.changed(bfs);
    output = createDiv("---");

}

function bfs() {
    graph.resetNodes();
    // breadth first search
    let path = [];
    let startNode = nodeA.value();
    let goalNode = nodeB.value();
    let node = graph.breadthFirstSearch(startNode, goalNode);
    let currentNode = node;
    while(currentNode != graph.nodes[startNode]) {
        path.unshift(currentNode.label);
        currentNode = graph.nodes[currentNode.parent];
    }
    path.unshift(startNode);
    output.html(path.toString());
}
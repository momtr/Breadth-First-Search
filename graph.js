class Graph {

    constructor() {
        this.nodes = {};
        this.nodesLabels = [];
    }

    addNode(node) {
        this.nodes[node.label] = node;
        this.nodesLabels.push(node.label);
    }

    connect(n1, n2) {
        let a = this.nodes[n1];
        let b = this.nodes[n2];
        if(!a.hasEdge(n2) && !b.hasEdge(n1)) {
            a.edges.push(n2);
            b.edges.push(n1);
        }
    }

    breadthFirstSearch(startNode, goalNode) {
        startNode = this.nodes[startNode];
        goalNode = this.nodes[goalNode];
        let queue = [];
        startNode.discovered = true;
        queue.push(startNode);
        while(queue.length != 0) {
            let v = queue.pop();
            if(v == goalNode)
                return v;
            for(let i of v.edges) {
                let node = this.nodes[i];
                if(!node.discovered) {
                    node.discovered = true;
                    node.parent = v.label;
                    queue.push(node);
                }
            }
        }
    }

    resetNodes() {
        for(let i of this.nodesLabels) {
            let node = this.nodes[i];
            node.discovered = false;
            node.parent = null;
        }
    }

}
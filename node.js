class Node {

    constructor(label) {
        this.label = label;
        this.discovered = false;
        this.parent = null;
        this.edges = [];
    }

    hasEdge(label) {
        for(let i of this.edges) {
            if(i == label) return true;
        }
        return false;
    }

}
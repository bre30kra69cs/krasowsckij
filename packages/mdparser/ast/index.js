const {NODE_TYPES} = require('./consts');

const templates = [];

const ast = (lexems) => {
  const createNode = (type) => {
    return {
      type,
      node: true,
      childrens: []
    };
  };

  const root = createNode(NODE_TYPES.ROOT);

  const dig = (node, source) => {
    let stokens = source;

    const getStokens = () => {
      return stokens;
    };

    const setStokens = (nextStokens) => {
      stokens = nextStokens;
    };

    const sliceStokens = (start) => {
      setStokens(getStokens().slice(start));
    };

    const execPriority = (proirities) => {};

    const loop = () => {
      const proirities = [];

      for (let template of templates) {
        const proirity = template(getStokens(), {
          getStokens,
          setStokens,
          sliceStokens
        });

        proirities.push(proirity);
      }

      execPriority(proirities);
    };
  };

  const run = () => {
    while (getStokens().length > 0) {}
  };

  return root;
};

module.exports = {
  ast
};

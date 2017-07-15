const babel = require("babel-core");

const babelOpts = {
	plugins: ["syntax-class-properties", "syntax-object-rest-spread", "transform-flow-strip-types", "syntax-jsx"]
};

exports.onHandleCode = (event) => {
	try {
		event.data.code = babel.transform(event.data.code, babelOpts).code;
	} catch (error) {
		console.error(error);
	}
};

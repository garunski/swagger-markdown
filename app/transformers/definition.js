
function getFormat(val) {
  if (val.format) {
    return val.format;
  }

  if (val.type === 'array') {
    let name = '[]';
    if (val.items && val.items.$ref) {
      name = val.items.$ref.substring(14, val.items.$ref.length);
      name = `${name}[]`;
    }

    return name;
  }

  return val.type;
}

function getDescription(val) {
  if (val.description) {
    return val.description;
  }
  return '';
}

function getRequired(val) {
  return val.required ? 'Yes' : 'No';
}

module.exports = (definition, data) => {
  const res = [];
  let defProps = null;
  if (definition && data && data.type === 'object') {
    res.push(`### ${definition}`);
    res.push('---');

    if ('properties' in data) {
      res.push('| Name | Description | Type | Required |');
      res.push('| ---- | ----------- | ---- | -------- |');
      defProps = data.properties;
    }

    Object.keys(data.properties).map(prop => {
      const propString = `| ${prop} | ${getDescription(defProps[prop])} | ${getFormat(defProps[prop])} | ${getRequired(defProps[prop])} |`;
      res.push(propString);
    });
  }
  return res.length ? res.join('\n') : null;
};

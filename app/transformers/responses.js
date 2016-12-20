/**
 * Build responses table
 * @param {object} responses
 * @returns {null|string}
 * @todo: implement schemas, items, refs
 */
module.exports = responses => {
  const res = [];
  res.push('**Responses**\n');

  res.push('| Code | Description | Type |');
  res.push('| ---- | ----------- | ---- |');

  Object.keys(responses).map(response => {
    let type = ' | string |';
    const r = responses[response];
    if (r.schema && r.schema.type === 'array' && r.schema.items && r.schema.items.$ref) {
      const name = r.schema.items.$ref.substring(14, r.schema.items.$ref.length);
      type = ` | ${name}[] |`;
    }

    res.push(`| ${response} | ${responses[response].description.replace(/[\r\n]/g, ' ') || ''} ${type}`);
  });
  return res.join('\n');
};

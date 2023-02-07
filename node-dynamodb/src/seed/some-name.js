const {putItem, getItem} = require("../tables");

const TABLE_NAME = "some_name";

const seedSomeName = async (count = 10) => {
  for (let i = 0; i < count; i++) {
    await putItem(
      tableName = TABLE_NAME,
      item = {
        "id": "key_" + i,
        "name": "name_" + i,
        // "type": i % 2 === 0 ? "sugar" : "plum",
      })
    console.log(`Inserted ${TABLE_NAME} with key ${i}`)

    const result = await getItem(
      tableName = TABLE_NAME,
      key = "key_" + i,
    )
    console.log(result);
  }
}

module.exports = seedSomeName;

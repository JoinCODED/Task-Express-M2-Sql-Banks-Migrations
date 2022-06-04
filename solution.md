1. Create a new field in your model:

```js
const AccountModel = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    username: {
      type: DataTypes.STRING,
    },
    funds: {
      type: DataTypes.INTEGER,
    },
    phone: {
      type: DataTypes.STRING,
    },
  });
  return Account;
};

module.exports = AccountModel;
```

2. Create a migration file:

```shell
npx sequelize-cli migration:create --name modify_account_add_phone_field
```

3. This will generate a migration file named `20190402212056-modify_account_add_phone_field.js` in the `migrations` folder.

4. Open that file and modify it to add the phone field.

```js
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Accounts', 'phone', Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Accounts', 'phone');
  },
};
```

5. Run the migration command:

```shell
   npx sequelize-cli db:migrate
```

6. To undo the migration, run:

```shell
   npx sequelize-cli db:migrate:undo
```

module.exports = (sequelize, DataTypes) => {
    const Destination = sequelize.define(
      "Destination",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        province: {
          type: DataTypes.STRING,
        },
        region: {
          type: DataTypes.STRING,
        },
      },
      {
        underscored: true,
      }
    );
  
    return Destination;
  };
  
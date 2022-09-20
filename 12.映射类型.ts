// 映射类型
{
  type AppConfig = {
    username: string;
    layout: string;
  };

  type AppPermissions = {
    [Property in keyof AppConfig as `change${Capitalize<Property>}`]: boolean
  };

  type Device = {
    manufacturer: string;
    price: number;
  };

  type DeviceFormatter = {
    [Key in keyof Device as `format${Capitalize<Key>}`]: (value: Device[Key]) => string;
  };
}

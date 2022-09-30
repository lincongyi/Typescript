{
  // 类型谓词is

  type Rect = {
    width: number
    height: number
  }
  type Circle = {
    center: [number, number]
    radius: number
  }

  // 类型收窄
  const calcArea1 = (param: Rect | Circle): number => {
    if (isRect(param)) {
      return param.width * param.height
    } else if (isCircle(param)) {
      return param.radius ** 2 * Math.PI
    } else {
      return 0
    }
  }

  function isRect(param: Rect | Circle): param is Rect {
    return 'width' in param && 'height' in param
  }

  function isCircle(param: Rect | Circle): param is Circle {
    return 'center' in param && 'radius' in param
  }

  // 可辩别类型：kind
  type Squre = {
    kind: 'Squre'
    sideLength: number
  }
  type Triangle = {
    kind: 'Triangle'
    sideLength: number
    height: number
  }

  // 类型收窄
  const calcArea2 = (param: Squre | Triangle): number => {
    if (param.kind === 'Squre') return param.sideLength ** 2
    else return (param.sideLength * param.height) / 2
  }
  /*
    使用kind属性可以区分那些属性相同的类型
    例如type Squre = { sideLength: number }和type Triangle = { slideLength?: number }
    这种情况就无法使用 in 关键来辨别类型了
    主要作用是：让复杂类型的收窄变成简单类型的对比
  */
}

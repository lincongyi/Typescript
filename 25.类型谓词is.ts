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
const calcArea = (param: Rect | Circle): number => {
  if (isRect(param)) {
    return param.width * param.height
  } else if (isCircle(param)) {
    return Math.pow(param.radius, 2) * Math.PI
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

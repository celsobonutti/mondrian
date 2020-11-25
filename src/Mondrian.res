type color =
  | White
  | Red
  | Yellow
  | Blue

type t = {
  numberOfRows: int,
  numberOfColumns: int,
  cells: array<color>,
}

let randomInt = Js.Math.random_int

let make = (numberOfColumns, numberOfRows) => {
  let cells = Belt.Array.makeBy(numberOfRows * numberOfColumns, _ => {
    let n = randomInt(0, 300)
    if n <= 210 {
      White
    } else if n <= 240 {
      Red
    } else if n <= 270 {
      Yellow
    } else {
      Blue
    }
  })

  {
    numberOfColumns: numberOfColumns,
    numberOfRows: numberOfRows,
    cells: cells,
  }
}

let makeRandom = () => {
  make(randomInt(4, 16), randomInt(4, 16))
}

let numberToRandomFractions = number => {
  let fractions = Belt.Array.makeBy(number, _ => {
    randomInt(1, 13)->string_of_int ++ "fr"
  })

  Belt.Array.joinWith(fractions, " ", a => a)
}

let colorToString = cell => {
  switch cell {
  | White => "white"
  | Red => "#F50F0F"
  | Blue => "#0D7FBE"
  | Yellow => "#FAE317"
  }
}

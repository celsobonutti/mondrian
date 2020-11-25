module App = {
  @react.component
  let make = () => {
    let (mondrian, setMondrian) = React.useState(_ => Mondrian.makeRandom())

    let gridStyle = ReactDOM.Style.make(
      ~width="90vh",
      ~height="90vh",
      ~backgroundColor="black",
      ~display="grid",
      ~gridTemplateColumns=Mondrian.numberToRandomFractions(mondrian.numberOfColumns),
      ~gridTemplateRows=Mondrian.numberToRandomFractions(mondrian.numberOfRows),
      ~gridGap="5px",
      (),
    )

    let generateNewMondrian = _ => {
      setMondrian(_ => Mondrian.makeRandom())
    }

    <div style={gridStyle} onClick={generateNewMondrian}> {mondrian.cells->Belt.Array.map(cell => {
        <div
          style={ReactDOM.Style.make(
            ~width="100%",
            ~height="100%",
            ~backgroundColor=Mondrian.colorToString(cell),
            (),
          )}
        />
      })->React.array} </div>
  }
}

ReactDOMRe.renderToElementWithId(<App />, "root")

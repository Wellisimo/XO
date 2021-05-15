export default (squares) => {
    if (
      squares[0].value === 'X' && squares[1].value === 'X' && squares[2].value === 'X' ||
      squares[3].value === 'X' && squares[4].value === 'X' && squares[5].value === 'X' ||
      squares[6].value === 'X' && squares[7].value === 'X' && squares[8].value === 'X' ||
      squares[0].value === 'X' && squares[3].value === 'X' && squares[6].value === 'X' ||
      squares[1].value === 'X' && squares[4].value === 'X' && squares[7].value === 'X' ||
      squares[2].value === 'X' && squares[5].value === 'X' && squares[8].value === 'X' ||
      squares[0].value === 'X' && squares[4].value === 'X' && squares[8].value === 'X' ||
      squares[2].value === 'X' && squares[4].value === 'X' && squares[6].value === 'X'
    ) {
      return 'You Win'
    } else if (
      squares[0].value === 'O' && squares[1].value === 'O' && squares[2].value === 'O' ||
      squares[3].value === 'O' && squares[4].value === 'O' && squares[5].value === 'O' ||
      squares[6].value === 'O' && squares[7].value === 'O' && squares[8].value === 'O' ||
      squares[0].value === 'O' && squares[3].value === 'O' && squares[6].value === 'O' ||
      squares[1].value === 'O' && squares[4].value === 'O' && squares[7].value === 'O' ||
      squares[2].value === 'O' && squares[5].value === 'O' && squares[8].value === 'O' ||
      squares[0].value === 'O' && squares[4].value === 'O' && squares[8].value === 'O' ||
      squares[2].value === 'O' && squares[4].value === 'O' && squares[6].value === 'O'
    ) {
      return 'You Lose'
    } else {
      let searchArrey = squares.map((element) => element.done)
      if (!searchArrey.includes(false)) {
        return 'Draw'
      }
    }
    return ''
}
class Machine extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        return (
            <div>
                <p id="fruitSlot">-{s1} - {s2} - {s3} -</p>
                <p id="anounce">{winner ? 'Congrats! You Won!' : 'Sorry. You Lose!'}</p>
            </div>
        )
    }
}
import React from 'react'
import Summary from './Summary'

function SummaryList(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const hash = feature + '-' + idx;
        const option = props.selected[feature];
        return (<Summary
            key={idx}
            featureHash={hash}
            selectedOption={option}
        />);
    });
    return summary
}

export default SummaryList
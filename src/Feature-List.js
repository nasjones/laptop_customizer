import React from 'react'
import Feature from './Feature'
import slugify from 'slugify';

function FeatureList(props) {
    const features = Object.keys(props.feature).map((featured, idx) => {
        const featureHash = featured + '-' + idx;
        const options = props.feature[featured].map((items) => {
            const hash = slugify(JSON.stringify(items));
            return (
                <Feature
                    key={hash}
                    itemHash={hash}
                    feature={featured}
                    updateFeature={props.updateFeature}
                    item={items}
                    selected={props.selected}
                />
            );
        });
        return (

            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{features}</h3>
                </legend>
                {options}
            </fieldset>
        );
    });
    return features
}
export default FeatureList
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Container, Segment,Label } from 'semantic-ui-react';


const Main = props => {
    const emptyData = {
        region: null,
        city: null,
        village: null
    };

    const [data, setData] = useState({ ...emptyData });
    const {
        regions = [],
        cities = [],
        villages = []
    } = props;

    const onOptionChange = (o, fieldName) => {
        setData(prev => {
            const varData = { ...prev };
            switch (fieldName) {
                case 'region':
                    varData.region = o.value;
                    break;
                case 'city':
                    varData.city = o.value;
                    break;
                case 'village':
                    varData.village = o.value;
                    break;

                default:
                    varData[fieldName] = o.value;
            }
            return varData;
        });
    };


    return (
        <Container>
            <Segment>
                <Label color='blue'>Regions</Label>
                <Dropdown
                    placeholder="Regions"
                    options={getRegionsOptions(regions)}
                    fluid
                    selection
                    search
                    onChange={(e, o) => onOptionChange(o, 'region')}
                    value={data.region}
                />
            </Segment>
            <Segment>
            <Label color='blue'>Cities</Label>
                <Dropdown
                    placeholder="Cities"
                    options={getCitiesOptions(cities, data.region)}
                    fluid
                    selection
                    search
                    onChange={(e, o) => onOptionChange(o, 'city')}
                    value={data.city}
                />
            </Segment>
            <Segment>
            <Label color='blue'>Villages</Label>
                <Dropdown
                    placeholder="Villages"
                    options={getVillagesOptions(villages, data.city)}
                    fluid
                    selection
                    search
                    onChange={(e, o) => onOptionChange(o, 'village')}
                    value={data.village}
                />
            </Segment>
        </Container>
    )
}

const getRegionsOptions = options => {
    let out = options.map(c => {
        return {
            key: parseInt(c.id, 10),
            text: `${c.name}`,
            value: parseInt(c.id, 10),
        };
    });
    return out;
};

const getCitiesOptions = (options, regionId) => {
    let opt = options.filter(item => item.region_id === regionId);
    if(!regionId){
        opt = options
    }
    let out = opt.map(c => {
        return {
            key: parseInt(c.id, 10),
            text: `${c.name}`,
            value: parseInt(c.id, 10)
        };
    });
    return out;
};

const getVillagesOptions = (options, cityId) => {
    let opt = options.filter(item => item.city_id === cityId);
    if(!cityId){
        opt = options
    }
    let out = opt.map(c => {
        return {
            key: parseInt(c.id, 10),
            text: `${c.name}`,
            value: parseInt(c.id, 10),
        };
    });
    return out;
};

function mapStateToProps(state) {
    return {
        regions: state.data.regions,
        cities: state.data.cities,
        villages: state.data.villages
    };
}

export default connect(
    mapStateToProps
)(Main)
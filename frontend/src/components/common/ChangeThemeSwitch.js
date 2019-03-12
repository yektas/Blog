import React from "react";
import { Switch } from "antd";
import PropTypes from 'prop-types';

const ChangeThemeSwitch  = (props) => (
        <Switch
            checked={props.theme === 'dark'}
            onChange={props.onChange}
            checkedChildren="Dark"
            unCheckedChildren="Light"
        />
    )


export default ChangeThemeSwitch;

ChangeThemeSwitch.propTypes = {
    onChange: PropTypes.func,
    theme: PropTypes.string
};
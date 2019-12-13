import React from "react";
import Select from "react-select";
import { Translate } from "react-redux-i18n";
import { setLocale } from "react-redux-i18n";
import { connect } from "react-redux";

const options = [
  { value: "en", label: "English" },
  { value: "ru", label: "Русский" }
];

const myStyles = {
  option: (provided, state) => ({
    ...provided,
    background: "none"
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "#F7AE4C",
    color: "white"
  }),
  control: (provided, state) => ({
    ...provided,
    background: "#22A8FE",
    border: "none"
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    justifyContent: "center"
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "white"
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white"
  })
};

const Sidebar = props => {
  const changeLanguage = locale => {
    props.changeLocale(locale.value);
  };

  return (
    <div className="sidebar">
      <h2>
        <Translate value="toDo" />
      </h2>
      <Select
        defaultValue="en"
        className="basic-single"
        classNamePrefix="select"
        options={options}
        name="color"
        styles={myStyles}
        isSearchable={false}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null
        }}
        onChange={changeLanguage}
        placeholder="Language"
      />
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  changeLocale: lang => {
    dispatch(setLocale(lang));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

import React, {useState} from 'react';
import classes from './Input.module.scss'


const FilterInput = ({
                         filterName,
                         filterSpecies,
                         filterStatus,
                         onStatusFilterChange,
                         onSpeciesFilterChange,
                         onNameFilterChange,
                         onTypeFilterChange,
                         typeChange,
                         isPage
}) => {

    // function handleFilterSelection(event) {
    //     onStatusFilterChange(event.target.value);
    // }
    function handleNameFilter(event) {
        onNameFilterChange(event.target.value);
    }

    function handleSpeciesFilter(event) {
        onSpeciesFilterChange(event.target.value);
    }

    function handleStatusFilter(event) {
        onStatusFilterChange(event.target.value);
    }

    const [isOpen, setIsOpen] = useState(false);

    const options = [
        ['Alive', "Живой"],
        ['Dead', "Мертв"],
        ['unknown', "Неизвестно"]
    ];


    const toggling = () => {
        setIsOpen(!isOpen)
    };

    const onOptionClicked = value => () => {
        onStatusFilterChange(value);
        setIsOpen(false);
    };

    return (
        <>
        {isPage === "character" && (
            <div className={classes.filterFormContainer}>
                <div className={classes.filterForm}>
                    <label>
                        <span>Поиск по имени</span>
                        <input
                            type="text"
                            name="charactername"
                            placeholder="Введите имя персонажа"
                            className={classes.inputFilter}
                            aria-label="name search input"
                            value={filterName == null ? '' : filterName}
                            onChange={handleNameFilter}
                        />
                    </label>
                    <label>
                        <span>Поиск по расе</span>
                        <input
                            type="text"
                            name="characterspecies"
                            placeholder="Введите расу персонажа"
                            className={classes.inputFilter}
                            aria-label="name search input"
                            value={filterSpecies == null ? '' : filterSpecies}
                            onChange={handleSpeciesFilter}
                        />
                    </label>
                </div>
                <label className={classes.filterSelect}>
                    <span>Поиск по статусу</span>
                    <div className={classes.DropDownContainer}>
                        <div  className={isOpen ? classes.DropDownHeaderActive: classes.DropDownHeader } onClick={toggling} >
                            {filterStatus || "Выберете статус персонажа"}
                        </div>
                        {isOpen && (
                            <div className={classes.DropDownListContainer}>
                                <div className={classes.DropDownList}>
                                    {options.map(option => (
                                        <div className={classes.ListItem} onClick={onOptionClicked(option[0])} key={Math.random()} data-id={option[0]}>
                                            {option[1]}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </label>
                <label className={classes.filterType}>
                    <span>Вид</span>
                    <div className={classes.filterTypeLists} >
                        <svg className={typeChange ? classes.filterTypeListActive :  classes.filterTypeList} onClick={()=>onTypeFilterChange(true)} width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 6H0V2H24V6ZM24 10H0V14H24V10ZM24 18H0V22H24V18Z" fill="#000"/>
                            <path d="M0 29.5H24" stroke="#000"/>
                        </svg>
                        <svg className={typeChange ? classes.filterTypeGrid :  classes.filterTypeGridActive} onClick={()=>onTypeFilterChange(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 11H0V0H11V11ZM24 11H13V0H24V11ZM11 24H0V13H11V24ZM24 24H13V13H24V24Z" fill="#000"/>
                        </svg>
                    </div>
                </label>
            </div>
        )}
            {isPage === "location" && (
                <div className={classes.filterFormContainer}>
                    <div className={classes.filterForm}>
                        <label>
                            <span>Поиск по названию</span>
                            <input
                                type="text"
                                name="charactername"
                                placeholder="Введите название локации"
                                className={classes.inputFilter}
                                aria-label="name search input"
                                value={filterName == null ? '' : filterName}
                                onChange={handleNameFilter}
                            />
                        </label>
                        <label>
                            <span>Поиск по типу</span>
                            <input
                                type="text"
                                name="characterspecies"
                                placeholder="Введите тип локации"
                                className={classes.inputFilter}
                                aria-label="name search input"
                                value={filterSpecies == null ? '' : filterSpecies}
                                onChange={handleSpeciesFilter}
                            />
                        </label>
                        <label>
                            <span>Поиск по измерению</span>
                            <input
                                type="text"
                                name="characterstatus"
                                placeholder="Введите измерение"
                                className={classes.inputFilter}
                                aria-label="name search input"
                                value={filterStatus == null ? '' : filterStatus}
                                onChange={handleStatusFilter}
                            />
                        </label>
                    </div>
                </div>
            )}
            {isPage === "episode" && (
                <div className={classes.filterFormContainer}>
                    <div className={[classes.filterForm,classes.filterForm_width].join(' ')}>
                        <label>
                            <span>Поиск по названию</span>
                            <input
                                type="text"
                                name="charactername"
                                placeholder="Введите название серии"
                                className={classes.inputFilter}
                                aria-label="name search input"
                                value={filterName == null ? '' : filterName}
                                onChange={handleNameFilter}
                            />
                        </label>
                        <label>
                            <span>Введите коду эпизода</span>
                            <input
                                type="text"
                                name="characterspecies"
                                placeholder="Введите заданный код эпизода"
                                className={classes.inputFilter}
                                aria-label="name search input"
                                value={filterSpecies == null ? '' : filterSpecies}
                                onChange={handleSpeciesFilter}
                            />
                        </label>
                    </div>
                </div>
            )}
        </>
    );
};

export default FilterInput;
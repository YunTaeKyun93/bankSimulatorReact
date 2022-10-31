const isNotNullOrUndefined = a => a != null;


const combineClasses = (...classNames) => {
    const withoutUndefined = classNames.filter(isNotNullOrUndefined);

    return withoutUndefined.join(' ');
};

export default combineClasses;

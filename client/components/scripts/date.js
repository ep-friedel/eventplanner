const second = 1000,
	minute = 60 * second,
	hour = 60 * minute,
	day = 24 * hour,
	week = 7 * day,
	year = 365 * day,
	tage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

export const formatDate = (date) => {
    const src = new Date(date);

    return `${src.getDate()}.${src.getMonth() + 1}.${src.getFullYear()}`;
}

export const formatDateTime = (date) => {
    const src = new Date(date);

    return `${src.getDate()}.${src.getMonth() + 1}.${src.getFullYear()} - ${src.getHours()}:${src.getMinutes()}`;
}
export const formatTimeShort = (date) => {
    const src = new Date(date),
    	diff = Date.now() - date;
    if (diff < hour) {
    	return `vor ${Math.floor(diff / minute)} Minuten`;
    } else if (diff < day) {
    	return `vor ${Math.floor(diff / hour)} Stunden`;
    } else if (diff < week) {
    	return `${tage[src.getDay()]}, ${src.getHours()}:${src.getMinutes()}`;
    }
    return `${src.getDate()}.${src.getMonth() + 1}${(diff < year) ? '' : ('.' + src.getFullYear())} ${src.getHours()}:${src.getMinutes()}`;
}

export const getUnixDate = (date) => {

}

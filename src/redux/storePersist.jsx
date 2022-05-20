const storePersist = {
    set: (key, state) => {
        localStorage.setItem(key, JSON.stringify(state));
    },
    get: (key) => {
        const result = localStorage.getItem(key);
        try {
            return JSON.parse(result);
        } catch (error) {
            /* Not a JSON format, but Redux needs an empty Object not Null */
            return {};
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            /* Do nothing */
            return false;
        }
    },
    isExist: (key) => {
        if (typeof window === 'undefined') {
            return false;
        }
        return localStorage.getItem(key) !== null;
    },
    getAll: () => {
        return localStorage;
    },
    clear: () => {
        localStorage.clear();
    },
};

export default storePersist;
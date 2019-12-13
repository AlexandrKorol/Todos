import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import reducers from '../reducers/reducers';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import { createLogger } from 'redux-logger';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const logger = createLogger({
	// ...options
});

const middlewares = [ thunk, logger ];

const translationObject = {
	en: {
		toDo: 'TODO',
		languages: 'Languages',
		toDoItems: 'Items',
		removeToDoItem: 'Delete',
		addNew: 'Add new',
		comments: 'Comments',
	},
	ru: {
		toDo: 'Список дел',
		languages: 'Языки',
		toDoItems: 'Дела',
		removeToDoItem: 'Удалить',
		addNew: 'Добавить',
		comments: 'Комментарии',
	},
};

const rootReducer = combineReducers({
	i18n: i18nReducer,
	todoState: reducers,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares)),
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationObject));
store.dispatch(setLocale('en'));
export default store;

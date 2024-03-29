import { Action, AnyAction, Reducer } from 'redux';
import type { PersistConfig, PersistState } from './types';
declare type PersistPartial = {
    _persist: PersistState;
} | any;
export default function persistReducer<S, A extends Action>(config: PersistConfig<S>, baseReducer: Reducer<S, A>): Reducer<S & PersistPartial, AnyAction>;
export {};

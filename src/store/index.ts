import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';
import { Coordinate } from '@/models/coordinate';
import { StoreState } from '@/models/storeState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    path: [] as Array<Coordinate>
  },

  mutations: {
    updatePath: (context: StoreState, newPath: Array<Coordinate>) => {
      context.path = newPath;
    }

  },
  actions: {
    setDefaultImage: (context: ActionContext<StoreState, StoreState>) => {
      context.state.path = [
        { x: 100, y: 10 },
        { x: 30, y: 30 },
        { x: 70, y: 30 },
        { x: 60, y: 40 },
        { x: 70, y: 70 },
        { x: 50, y: 75 },
        { x: 80, y: 80 },
        { x: 70, y: 90 },
        { x: 90, y: 100 },
        { x: 80, y: 105 },
        { x: 90, y: 120 },
        { x: 40, y: 150 },
        { x: 70, y: 155 },
        { x: 40, y: 170 },
        { x: 50, y: 180 },
        { x: 45, y: 190 },
        { x: 30, y: 200 },
        { x: 40, y: 210 },
        { x: 30, y: 220 },
        { x: 100, y: 230 },
        { x: 30, y: 240 },
        { x: 100, y: 250 },
        { x: 30, y: 260 },
        { x: 50, y: 265 },
        { x: 40, y: 270 },
        { x: 60, y: 280 },
        { x: 50, y: 290 },
        { x: 80, y: 320 },
        { x: 40, y: 340 },
        { x: 50, y: 350 },
        { x: 35, y: 360 },
        { x: 40, y: 370 },
        { x: 30, y: 380 },
        { x: 100, y: 400 }
      ];
    }
  },
  getters: {
    path: state => state.path
  }
});

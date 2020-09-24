export declare const store: import("redux").Store<import("redux").CombinedState<{
    rockets: {
        rockets: any;
        rocketsLoaded: boolean;
    } | {
        requestingMovieDataError: any;
        rockets: never[];
        rocketsLoaded: boolean;
    };
}>, any> & {
    dispatch: unknown;
};

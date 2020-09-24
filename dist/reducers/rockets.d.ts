export default function (state: {
    rockets: never[];
    rocketsLoaded: boolean;
} | undefined, action: any): {
    rockets: any;
    rocketsLoaded: boolean;
} | {
    requestingMovieDataError: any;
    rockets: never[];
    rocketsLoaded: boolean;
};

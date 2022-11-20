import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'e89c9cd783msh04efc827b96692ap15484djsnfebcfaded5c3');
            return headers;
        }
    }),
    endpoints: (builder)=>({
        getTopCharts: builder.query({query: ()=> '/charts/world'}),
        getSongsByGenre: builder.query({query: (genre)=> `/charts/genre-world?genre_code=${genre}`}),
        getSongDetails: builder.query({query: ({songid})=> `/tracks/details?track_id=${songid}`}),
        getRelatedSongs: builder.query({query: ({songid})=> `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({query: (artistId)=> `/artists/details?artist_id=${artistId}`}),
        getSongByCountry: builder.query({query: (country)=> `/charts/country?country_code=${country}`}),
        getSongsBySearch: builder.query({query: ()=>`/search/multi?search_type=SONGS_ARTISTS&query=one republic`})
    })
});
export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetRelatedSongsQuery,
    useGetArtistDetailsQuery,
    useGetSongByCountryQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi;
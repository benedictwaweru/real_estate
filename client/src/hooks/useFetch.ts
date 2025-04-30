// -------------------------------------------------------------------------
// Copyright 2025 Benedict Waweru
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// -------------------------------------------------------------------------

import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

/**
 * @typedef {Object} FetchDataOptions
 * @template T
 */
export type FetchDataOptions<T> = {
	/**
	 * @property {queryKey} - Unique key for caching & identifying the query
	 */
	queryKey: QueryKey;

	/**
	 * @property {url} - API endpoint you want to call
	 */
	url: string;

	/**
	 * @property {params} - Optional query params (e.g., ?id=123)
	 */
	params?: Record<string, unknown>;

	/**
	 * @property {config} - Optional Axios config (e.g., headers, auth, timeout)
	 */
	config?: AxiosRequestConfig;

	/**
	 * @property {queryOptions} - Extra settings for useQuery (e.g., enabled, staleTime) – but intentionally excludes queryKey and queryFn since this hook provides them
	 */
	queryOptions?: Omit<
		UseQueryOptions<T, AxiosError, T, QueryKey>,
		"queryKey" | "queryFn"
	>;
};


/**
 * A custom React Query hook for fetching data with Axios
 * @template T - The type of data expected in the response
 * @param {Object} options - Configuration options for the fetch
 * @param {unknown[]} options.queryKey - The query key used by React Query
 * @param {string} options.url - The URL to fetch data from
 * @param {Object} [options.params={}] - Query parameters for the request
 * @param {Object} [options.config={}] - Additional Axios request config
 * @param {Object} [options.queryOptions={}] - Additional React Query options
 * @returns {UseQueryResult<T, AxiosError>} React Query result object
 */
export const useFetch = <T>({
	queryKey,
	url,
	params = {},
	config = {},
	queryOptions = {},
}: FetchDataOptions<T>) => {

	/**
	 * Performs the actual data fetching
	 * @async
	 * @function fetchData
	 * @returns {Promise<T>} The data from the response
	 * @throws {AxiosError} When the request fails
	 */
	const fetchData = async (): Promise<T> => {
		try {
			const response = await axios.get<T>(url, { params, ...config });
			return response.data;
		} catch (error) {
			throw error as AxiosError;
		}
	};

	return useQuery<T, AxiosError>({
		queryKey,
		queryFn: fetchData,
		...queryOptions,
	});
};

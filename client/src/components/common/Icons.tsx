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

export function AppleBlackIcon({ className }: React.ComponentProps<"button">) {
	return (
		<svg
			width="24"
			height="24"
			fill="#EAECEF"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.0756 3.64877C15.1861 4.6061 14.7876 5.54843 14.204 6.24214C13.5956 6.92442 12.6209 7.44595 11.6726 7.37879C11.5485 6.45861 12.0291 5.47913 12.5668 4.88187C13.1752 4.20317 14.231 3.68378 15.0756 3.64877ZM18.1084 8.79019C17.9965 8.85395 16.2493 9.84885 16.2687 11.8728C16.2905 14.3233 18.5248 15.1327 18.5511 15.1413C18.5384 15.1985 18.2014 16.3101 17.3644 17.4389C16.665 18.4327 15.931 19.4043 14.7676 19.4214C14.2139 19.4337 13.8401 19.2824 13.4506 19.1248C13.0443 18.9604 12.621 18.7892 11.9587 18.7892C11.2566 18.7892 10.8144 18.9661 10.3881 19.1366C10.0194 19.2841 9.66254 19.4269 9.15964 19.4464C8.05113 19.4857 7.20358 18.3855 6.47861 17.401C5.03018 15.3906 3.90212 11.7342 5.41447 9.24657C6.14771 8.02633 7.48409 7.24118 8.91222 7.21974C9.5412 7.2076 10.1446 7.43792 10.6735 7.63982C11.0781 7.79423 11.439 7.93203 11.7346 7.93203C11.9946 7.93203 12.3456 7.79969 12.7547 7.64548C13.3989 7.40262 14.1871 7.10549 14.9902 7.18545C15.5392 7.20045 17.1035 7.39121 18.1112 8.78862L18.1084 8.79019Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function GoogleIcon({ className }: React.ComponentProps<"button">) {
	return (
		<svg
			width="24"
			height="24"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className}
		>
			<g clipPath="url(#clip0_2445_976)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M19.68 12.1818C19.68 11.6146 19.6291 11.0691 19.5345 10.5455H12V13.64H16.3055C16.12 14.64 15.5564 15.4873 14.7091 16.0546V18.0618H17.2945C18.8073 16.6691 19.68 14.6182 19.68 12.1818Z"
					fill="#4285F4"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11.9997 20C14.1597 20 15.9706 19.2836 17.2942 18.0618L14.7088 16.0545C13.9924 16.5345 13.076 16.8182 11.9997 16.8182C9.91604 16.8182 8.1524 15.4109 7.52331 13.52H4.85059V15.5927C6.16695 18.2073 8.8724 20 11.9997 20Z"
					fill="#34A853"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.52364 13.52C7.36364 13.04 7.27273 12.5273 7.27273 12C7.27273 11.4727 7.36364 10.96 7.52364 10.48V8.40729H4.85091C4.30909 9.48729 4 10.7091 4 12C4 13.2909 4.30909 14.5127 4.85091 15.5927L7.52364 13.52Z"
					fill="#FBBC05"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11.9997 7.18182C13.1742 7.18182 14.2288 7.58545 15.0579 8.37818L17.3524 6.08364C15.9669 4.79273 14.156 4 11.9997 4C8.8724 4 6.16695 5.79273 4.85059 8.40727L7.52331 10.48C8.1524 8.58909 9.91604 7.18182 11.9997 7.18182Z"
					fill="#EA4335"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2445_976">
					<rect
						width="16"
						height="16"
						fill="none"
						transform="translate(4 4)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

export function MicrosoftIcon() {
	return (
		<svg
			width="72"
			height="72"
			viewBox="0 0 72 72"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="6" y="6" width="28.5" height="28.5" fill="#F25022" />
			<rect x="37.5" y="6" width="28.5" height="28.5" fill="#80BA01" />
			<rect x="37.5" y="37.5" width="28.5" height="28.5" fill="#FFB902" />
			<rect x="6" y="37.5" width="28.5" height="28.5" fill="#02A4EF" />
		</svg>
	);
}

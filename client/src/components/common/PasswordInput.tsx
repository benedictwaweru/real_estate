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

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const PasswordInput = ({ ...props }): React.JSX.Element => {
	const [showPassword, setShowPassword] = React.useState(false);

	return (
		<div className="relative">
			<Input
				type={showPassword ? "text" : "password"}
				placeholder="••••••••••••"
				{...props}
			/>
			<Button
				type="button"
				variant="ghost"
				size="icon"
				className="absolute right-0 top-0 hover:bg-transparent"
				onClick={() => setShowPassword(!showPassword)}
			>
				{showPassword ? (
					<EyeOff className="w-4 h-4" />
				) : (
					<Eye className="w-4 h-4" />
				)}
			</Button>
		</div>
	);
};

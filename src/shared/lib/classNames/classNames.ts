type Mode = Record<string, boolean | string>

export function classNames(cls: string, mode: Mode = {}, additional: string[] = []) {
	return [
		cls,
		...Object.entries(mode)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
		...additional.filter(Boolean)
	].join(' ')
}
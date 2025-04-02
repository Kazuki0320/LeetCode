function countSegments(s:string): number {
    if (s.trim() === "") return 0

    count segments = s.trim().split(/\s+/)
    return segments.length
}

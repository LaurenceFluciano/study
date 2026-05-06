package main

func fibonacci() func() int {
	arr := []int{0, 1}

	return func() int {
		next := arr[len(arr)-2] + arr[len(arr)-1]
		arr = append(arr, next)
		return next
	}
}

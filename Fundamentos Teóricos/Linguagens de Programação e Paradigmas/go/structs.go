package main

import "math"

type Vertex struct {
	i, j float64
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.i*v.i + v.j*v.j)
}

func EscalarProduct(v *Vertex, u *Vertex) float64 {
	// u*v = u1*v1+u2*v2

	return v.i*u.i + v.j*u.j
}

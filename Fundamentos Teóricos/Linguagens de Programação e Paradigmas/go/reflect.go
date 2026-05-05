package main

import (
	"fmt"
	"reflect"
)

func reflect_study() {
	a := 10

	// First Law (Interface Value -> Reflection Object)
	f := reflect.ValueOf(a)

	fmt.Println("--- FIRST LAW ---")
	fmt.Println("value: ", f)
	fmt.Println("type string: ", f.String())
	fmt.Println(f.Kind() == reflect.Int)

	t := reflect.TypeOf(a)

	fmt.Println("\n--- SECOND LAW ---")
	fmt.Println("type: ", t)
	fmt.Println("type string: ", t.String())
	fmt.Println(t.Kind() == reflect.Int)

	// Second Law (Reflection Object -> Interface Value)
	y := f.Interface()

	fmt.Println("unpacked interface: ", y.(int))

	// Third Law (To modify a reflection object, the value must be settable)

	fmt.Println("\n--- THIRD LAW ---")

	fmt.Println("Settability of f:", f.CanSet())

	fmt.Println("\nYou must to pass a pointer of original vale to be settable:")

	fmt.Println("Nesse caso ele retornar a referência: ", reflect.ValueOf(&a))

	v := reflect.ValueOf(&a).Elem()

	fmt.Println("Settability of v:", v.CanSet())

	v.SetInt(7)

	fmt.Println("Settability of v:", v)

	// Struct

	fmt.Println("\n--- STRUCTS ---")

	type T struct {
		A int
		B string
	}

	ex := T{23, "Example"}
	valueOfT := reflect.ValueOf(&ex).Elem()
	typeOfT := valueOfT.Type()

	fmt.Println(valueOfT)
	fmt.Println(typeOfT)

	for i := 0; i < valueOfT.NumField(); i++ {
		f := valueOfT.Field(i)

		fmt.Println(typeOfT.Field(i))

		fmt.Printf("%d: %s %s = %v\n", i,
			typeOfT.Field(i).Name, f.Type(), f.Interface()) // poderia ser f apenas também em vez de f.Interface()
	}

}

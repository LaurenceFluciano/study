package main

import (
	"encoding/binary"
	"log"
	"math"
	"os"
)

func AudioTest() {
	const sampleRate = 44100
	const duration = 10.0 // segundos
	// var frequency = 261.63 // Dó (C4)
	const amplitude = 30000

	numSamples := int(sampleRate * duration)
	dataSize := numSamples * 2 // int16 = 2 bytes

	file, err := os.Create("do.wav")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	// =========================
	// HEADER WAV (44 bytes)
	// =========================

	file.Write([]byte("RIFF"))
	binary.Write(file, binary.LittleEndian, uint32(36+dataSize))
	file.Write([]byte("WAVE"))

	// fmt chunk
	file.Write([]byte("fmt "))
	binary.Write(file, binary.LittleEndian, uint32(16)) // tamanho chunk
	binary.Write(file, binary.LittleEndian, uint16(1))  // PCM
	binary.Write(file, binary.LittleEndian, uint16(1))  // mono
	binary.Write(file, binary.LittleEndian, uint32(sampleRate))
	binary.Write(file, binary.LittleEndian, uint32(sampleRate*2))
	binary.Write(file, binary.LittleEndian, uint16(2))
	binary.Write(file, binary.LittleEndian, uint16(16)) // bits por sample

	// data chunk
	file.Write([]byte("data"))
	binary.Write(file, binary.LittleEndian, uint32(dataSize))

	// =========================
	// GERAR ONDA SENOIDAL
	// =========================

	var phase float64 = 0

	// Notas: Sol, Ré, Dó, Si, Lá, Sol(oitava), Ré...
	musica := []float64{

		392.00, 392.00, 587.33, 587.33, 523.25, 493.88, 440.00, 783.99, 783.99, 587.33,
	}

	samplesPorNota := sampleRate / 4

	for i := 0; i < numSamples; i++ {

		musicaIndice := i / samplesPorNota

		if musicaIndice >= len(musica) {
			musicaIndice = len(musica) - 1
		}

		phase += 2 * math.Pi * musica[musicaIndice] / sampleRate

		if phase > 2*math.Pi {
			phase -= 2 * math.Pi
		}

		sample := int16(amplitude * math.Sin(phase))

		binary.Write(file, binary.LittleEndian, sample)
	}
}

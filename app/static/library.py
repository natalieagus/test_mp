from org.transcrypt.stubs.browser import *
import random

array = []

def gen_random_int(number, seed):
	a = []
	for i in range(0,number):
		a.append(i)
	random.shuffle(a,random.seed(seed))
	return a

def generate():
	global array

	number = 10
	seed = 200

	# call gen_random_int() with the given number and seed
	# store it to the global variable array
	array = gen_random_int(number, seed)
	pass

	# convert the items into one single string 
	# the number should be separated by a comma
	# and a full stop should end the string.
	array_string = str(array)
	array_str = array_string[1:-1] + "."
	pass

	# This line is to placed the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = array_str

def bubble_sort(list):
    n = len(list)
    swapped = True
    n_new = 0
    while (swapped == True) :
        swapped = False
        for j in range(1,n):
            if list[j] < list[j-1] :
                list[j], list[j-1] = list[j-1], list[j]
                swapped = True
                n_new = j
        n = n_new

def sortnumber1():
	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		You need to do the following:
		- get the list of numbers from the global variable array and 
			copy it to a new list
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	new_array = array[:]
	bubble_sort(new_array)
	array_string1 = str(new_array)
	array_str = array_string1[1:-1] + "."
	pass
	document.getElementById("sorted").innerHTML = array_str

def sortnumber2():
	'''	This function is used in Exercise 2.
		The function is called when the sort button is clicked.

		You need to do the following:
		- Get the numbers from a string variable "value".
		- Split the string using comma as the separator and convert them to 
			a list of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# The following line get the value of the text input called "numbers"
	value = document.getElementsByName("numbers")[0].value

	# Throw alert and stop if nothing in the text input
	if value == "":
		window.alert("Your textbox is empty")
		return

	# Your code should start from here
	# store the final string to the variable array_str
	list_of_values = value.split(", ")
	new_list = [int(i) for i in list_of_values]
	bubble_sort(new_list)
	array_string2 = str(new_list)
	array_str = array_string2[1:-1] + "."
	pass
	document.getElementById("sorted").innerHTML = array_str



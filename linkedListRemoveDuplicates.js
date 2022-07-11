function removeDuplicates(root) {
	const set = new Set()
	let node = root
	
	while (node) {
		if (set.has(node.val)) {
			if (node.prev) {
				node.prev.next = node.next
			}
			else {
				root = node.next
			}

			if (node.next) node.next.prev = node.prev
		}
		else {
			set.add(node.val)
		}

		node = node.next
	}

	return root
}

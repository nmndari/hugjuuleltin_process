from greeting import greet

def test_greet_returns_full_message():
    assert greet("World") == "Hello, World!"

def test_greet_includes_name():
    assert "World" in greet("World")
from greeting import greet

def test_greet_returns_full_message():
    assert greet("World") == "Сайн байна уу, World!"

def test_greet_includes_name():
    assert "Намуун" in greet("Намуун")
